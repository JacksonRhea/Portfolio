import React, { useEffect, useRef, useState } from "react"
import { Button, Container } from "react-bootstrap"
import { toast } from "react-toastify"
import SnakeModal from "../components/snakeModal"

interface Props {
    show: boolean
    setShowSnakeGame: (hide: boolean) => void
}

enum Direction {
    Up = "up",
    Down = "down",
    Left = "left",
    Right = "right",
    Stopped = "stop"
}

const SnakeGame = (props: Props) => {
    const [points, setPoints] = useState<[number, number][]>([[0, 0]]);
    const [goal, setGoal] = useState<[number, number]>([2, 3]);
    const [lost, setLost] = useState(false);
    const [won, setWon] = useState(false);
    const FRAME_INTERVAL = 300; // ms
    const maxGridSize = 8; //Always set even number
    
    //References
    const directionRef = useRef<Direction>(Direction.Stopped);
    const goalRef = useRef<[number, number]>(goal);
    const hitGoalRef = useRef<boolean>(false);
    const oldGoalRef = useRef<[number, number]>(goal);
    const rafRef = useRef<number | null>(null);
    const lastUpdateRef = useRef(performance.now());
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        window.addEventListener("keydown", handleDirectionChange);

        return () => {
            window.removeEventListener("keydown", handleDirectionChange);
        }
    }, [])

    useEffect(() => {
        if (props.show && !lost && !won) {
            rafRef.current = requestAnimationFrame(loop);
        }
        
        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        }

    }, [props.show, lost, won])

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext("2d");
        if (!context) return;

        //Clear canvas
        context.clearRect(0, 0, canvas.width, canvas.height);

        //Draw grid lines
        context.strokeStyle = "#b6b6b6ff";
        for (let i = 0; i < maxGridSize; i++) {
            //Rows
            context.beginPath();
            context.moveTo(0, i * 80);
            context.lineTo(maxGridSize * 100, i * 80);
            context.stroke();

            //Cols
            context.beginPath();
            context.moveTo(i * 80, 0);
            context.lineTo(i * 80, maxGridSize * 100);
            context.stroke();
        }

        //Draw Goal
        context.fillStyle = "gold";
        context.beginPath();
        context.arc(goalRef.current[0] * 80 + 40, goalRef.current[1] * 80 + 40, 30, 0, 2 * Math.PI);
        context.fill();
        context.beginPath();
        context.fillStyle = "green";
        context.arc(goalRef.current[0] * 80 + 40, goalRef.current[1] * 80 + 40, 20, 0, 2 * Math.PI);
        context.fill();

        //Draw points
        points.forEach(([x, y]) => {
            context.fillStyle = "purple";
            context.fillRect(x * 80, y * 80, 80, 80);
        })

        //Draw start
        const x = points[0][0];
        const y = points[0][1];        
        context.fillStyle = "black";
        context.beginPath();
        context.arc(x * 80 + 15, y * 80 + 15, 10, 0, 2 * Math.PI);
        context.fill();
        context.beginPath();
        context.arc(x * 80 + 65, y * 80 + 15, 10, 0, 2 * Math.PI);
        context.fill();
        context.beginPath();
        context.arc(x * 80 + 40, y * 80 + 45, 20, 0, 1 * Math.PI);
        context.fill();
    }, [points, goalRef.current]);

    const loop = (timestamp: number) => {
        if (!props.show || lost || won) return;

        if (timestamp - lastUpdateRef.current >= FRAME_INTERVAL) {
            setPoints(prevPoints => {
                let pointsCopy = [...prevPoints];
                //Win condition
                if (pointsCopy.length === maxGridSize**2) {
                    toast.success("Congrats you won!");
                    directionRef.current = Direction.Stopped;
                    setWon(true);
                    return pointsCopy;
                }

                if (hitGoalRef.current) {
                    hitGoalRef.current = false;
                    pointsCopy.push(oldGoalRef.current);

                    let row = Math.floor(Math.random() * maxGridSize);
                    let col = Math.floor(Math.random() * maxGridSize);
                    while (pointsCopy.findIndex((point, index) => index > 0 && point[0] === row && point[1] === col) > 0) {
                        row = Math.floor(Math.random() * maxGridSize);
                        col = Math.floor(Math.random() * maxGridSize);
                    }

                    setGoal([row, col]);
                    goalRef.current = [row, col];
                }

                const headPosition = pointsCopy[0];
                if (pointsCopy.length > 1 && directionRef.current !== Direction.Stopped) {
                    //Trail longer than 2 which will be most of the time, take last item and move to front
                    const tailPosition = pointsCopy.pop();
                    if (tailPosition) {
                        let newHead: [number, number] = [0, 0];
                        if (directionRef.current === Direction.Up && (headPosition[1] - 1) > -1) {
                            //Take tail and move it to head[1] - 1
                            newHead = [headPosition[0], headPosition[1] - 1];
                        } else if (directionRef.current === Direction.Down && (headPosition[1] + 1) < maxGridSize) {
                            //Take tail and move it to head[1] + 1
                            newHead = [headPosition[0], headPosition[1] + 1];
                        } else if (directionRef.current === Direction.Left && (headPosition[0] - 1) > -1) {
                            //Take tail and move it to head[0] - 1
                            newHead = [headPosition[0] - 1, headPosition[1]];
                        } else if (directionRef.current === Direction.Right && (headPosition[0] + 1) < maxGridSize) {
                            //Take tail and move it to head[0] + 1
                            newHead = [headPosition[0] + 1, headPosition[1]];
                        } else {
                            if (props.show) {
                                toast.error("You lost (collided with wall)", { autoClose: 5000 });
                                directionRef.current = Direction.Stopped;
                                setLost(true);
                            }
                        }
                        handleCollision(pointsCopy, newHead);
                        pointsCopy.unshift(newHead) //New head so move to front
                    }
                } else {
                    //length of 1, start
                    if (headPosition) {
                        let newHead: [number, number] = [0, 0];
                        if (directionRef.current === Direction.Up && (headPosition[1] - 1) > -1) {
                            newHead = [headPosition[0], headPosition[1] - 1];
                        } else if (directionRef.current === Direction.Down && (headPosition[1] + 1) < maxGridSize) {
                            newHead = [headPosition[0], headPosition[1] + 1];
                        } else if (directionRef.current === Direction.Left && (headPosition[0] - 1) > -1) {
                            newHead = [headPosition[0] - 1, headPosition[1]];
                        } else if (directionRef.current === Direction.Right && (headPosition[0] + 1) < maxGridSize) {
                            newHead = [headPosition[0] + 1, headPosition[1]];
                        } else {
                            if (props.show && directionRef.current !== Direction.Stopped) {
                                toast.error("You lost (collided with wall)", { autoClose: 5000 });
                                setLost(true);
                            }
                        }
                        pointsCopy[0] = newHead;
                    }
                }
                checkGoalHit(pointsCopy);
                lastUpdateRef.current = timestamp;
                return pointsCopy;
            })
        }

        rafRef.current = requestAnimationFrame(loop);
    }

    const checkGoalHit = (pointsCopy: [number, number][]) => {
        const head = pointsCopy[0];
        let goalCopy = [...goalRef.current];
        
        if (head[0] === goalCopy[0] && head[1] === goalCopy[1]) { //ran into goal
            oldGoalRef.current = [goalCopy[0], goalCopy[1]];
            hitGoalRef.current = true;
        }
    }

    const handleDirectionChange = (e: KeyboardEvent) => {
        let newDirection = Direction.Stopped;

        if (e.key === "ArrowUp" && directionRef.current === Direction.Down) {
            newDirection = Direction.Down
        } else if (e.key === "ArrowDown" && directionRef.current === Direction.Up) {
            newDirection = Direction.Up
        } else if (e.key === "ArrowLeft" && directionRef.current === Direction.Right) {
            newDirection = Direction.Right
        } else if (e.key === "ArrowRight" && directionRef.current === Direction.Left) {
            newDirection = Direction.Left
        } else if (e.key === "ArrowUp") {
            newDirection = Direction.Up;
        } else if (e.key === "ArrowLeft") {
            newDirection = Direction.Left;
        } else if (e.key === "ArrowRight") {
            newDirection = Direction.Right;
        } else if (e.key === "ArrowDown") {
            newDirection = Direction.Down;
        }

        directionRef.current = newDirection;
    }

    const handleModalClose = (skipModalClose: boolean) => {
        directionRef.current = Direction.Stopped;
        setGoal([2, 3]);
        goalRef.current = [2, 3];
        setPoints([[0, 0]]);
        hitGoalRef.current = false;
        oldGoalRef.current = [2, 3];
        setLost(false);
        setWon(false);
        if (!skipModalClose) {
            props.setShowSnakeGame(false);
        } else {
            window.addEventListener("keydown", handleDirectionChange);
            rafRef.current = requestAnimationFrame(loop);
        }
    }
    const handleCollision = (pointsCopy: [number, number][], headPosition: [number, number]) => {
        const index = pointsCopy.findIndex((point, index) => index > 0 && point[0] === headPosition[0] && point[1] === headPosition[1]);
        if (index > 0) {
            toast.error("You lost (collided with self)", {autoClose: 5000});
            directionRef.current = Direction.Stopped;
            setLost(true);
        }
    }

    const handleTemplateModalContent = () => {
        return (
            <Container fluid className="d-flex flex-column justify-content-center align-items-center">
                <h1>Score: {points.length - 1}</h1>
                <canvas 
                    ref={canvasRef}
                    height={maxGridSize * 80}
                    width={maxGridSize * 80}
                    style={{ border: "1px solid black", background: "green"}}
                />
            </Container>
        )
    }

    const handleTemplateModalButtons = () => {
        return (
            <>
                <Button
                    size="sm"
                    variant="primary"
                    onClick={() => handleModalClose(false)}
                >
                    Close
                </Button>
                <Button
                    variant="secondary"
                    hidden={!lost && !won}
                    onClick={() => handleModalClose(true)}
                >
                    Restart
                </Button>
            </>
        )
    }

    return (
        <>
            <SnakeModal 
                closeButton
                title={"Play Snake!"}
                show={props.show}
                onHide={() => handleModalClose(false)}
                size="lg"
                renderContent={handleTemplateModalContent}
                renderButtons={handleTemplateModalButtons}
            />
        </>
    )
}

export default SnakeGame;