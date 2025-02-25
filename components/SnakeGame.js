import React, { useState, useEffect, useRef, useCallback } from "react";
import { View, Text, TouchableOpacity, StatusBar } from "react-native";

const GRID_SIZE = 15;
const CELL_SIZE = 20;
const BOARD_SIZE = GRID_SIZE * CELL_SIZE;

const INITIAL_SNAKE = [{ x: 7, y: 7 }];
const INITIAL_FOOD = {
  x: Math.floor(Math.random() * GRID_SIZE),
  y: Math.floor(Math.random() * GRID_SIZE),
};
const DIRECTIONS = {
  UP: { x: 0, y: -1 },
  DOWN: { x: 0, y: 1 },
  LEFT: { x: -1, y: 0 },
  RIGHT: { x: 1, y: 0 },
};

const SnakeGame = ({ isEnabled }) => {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [food, setFood] = useState(INITIAL_FOOD);
  const [direction, setDirection] = useState(DIRECTIONS.RIGHT);
  const [gameOver, setGameOver] = useState(false);
  const gameIntervalRef = useRef(null);

  const moveSnake = useCallback(() => {
    const newHead = {
      x: (snake[0].x + direction.x + GRID_SIZE) % GRID_SIZE,
      y: (snake[0].y + direction.y + GRID_SIZE) % GRID_SIZE,
    };

    if (
      snake.some(
        (segment) => segment.x === newHead.x && segment.y === newHead.y
      )
    ) {
      setGameOver(true);
      return;
    }

    const newSnake = [newHead, ...snake];
    if (newHead.x === food.x && newHead.y === food.y) {
      setFood({
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE),
      });
    } else {
      newSnake.pop();
    }
    setSnake(newSnake);
  }, [snake, direction, food]);

  useEffect(() => {
    if (gameOver) return;
    gameIntervalRef.current = setInterval(moveSnake, 200);
    return () => clearInterval(gameIntervalRef.current);
  }, [moveSnake, direction]);

  const resetGame = () => {
    setSnake(INITIAL_SNAKE);
    setFood(INITIAL_FOOD);
    setDirection(DIRECTIONS.RIGHT);
    setGameOver(false);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: isEnabled ? "#222" : "#f4f4f4",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <StatusBar hidden={true} />
      <Text
        style={{
          fontSize: 28,
          fontWeight: "bold",
          color: isEnabled ? "white" : "black",
          marginBottom: 10,
        }}
      >
        🐍 Snake Game
      </Text>

      <View
        style={{
          width: BOARD_SIZE,
          height: BOARD_SIZE,
          flexDirection: "row",
          flexWrap: "wrap",
          backgroundColor: "#333",
          borderRadius: 10,
          padding: 2,
        }}
      >
        {[...Array(GRID_SIZE * GRID_SIZE)].map((_, index) => {
          const x = index % GRID_SIZE;
          const y = Math.floor(index / GRID_SIZE);
          const isSnake = snake.some(
            (segment) => segment.x === x && segment.y === y
          );
          const isFood = food.x === x && food.y === y;
          return (
            <View
              key={index}
              style={{
                width: CELL_SIZE,
                height: CELL_SIZE,
                backgroundColor: isSnake
                  ? "#4CAF50"
                  : isFood
                  ? "#FF3D00"
                  : "#444",
                borderRadius: isFood ? 50 : 0,
              }}
            />
          );
        })}
      </View>

      <View
        style={{ flexDirection: "column", alignItems: "center", marginTop: 15 }}
      >
        <TouchableOpacity
          style={{
            padding: 15,
            backgroundColor: "#1976D2",
            borderRadius: 50,
            margin: 5,
            width: 50,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => setDirection(DIRECTIONS.UP)}
        >
          <Text
            style={{
              color: "white",
              fontSize: 24,
              fontWeight: "bold",
            }}
          >
            ↑
          </Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row", marginTop: 5 }}>
          <TouchableOpacity
            style={{
              padding: 15,
              backgroundColor: "#1976D2",
              borderRadius: 50,
              margin: 5,
              width: 50,
              height: 50,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => setDirection(DIRECTIONS.LEFT)}
          >
            <Text
              style={{
                color: "white",
                fontSize: 24,
                fontWeight: "bold",
              }}
            >
              ←
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 15,
              backgroundColor: "#1976D2",
              borderRadius: 50,
              margin: 5,
              width: 50,
              height: 50,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => setDirection(DIRECTIONS.RIGHT)}
          >
            <Text
              style={{
                color: "white",
                fontSize: 24,
                fontWeight: "bold",
              }}
            >
              →
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            padding: 15,
            backgroundColor: "#1976D2",
            borderRadius: 50,
            margin: 5,
            width: 50,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => setDirection(DIRECTIONS.DOWN)}
        >
          <Text
            style={{
              color: "white",
              fontSize: 24,
              fontWeight: "bold",
            }}
          >
            ↓
          </Text>
        </TouchableOpacity>
      </View>

      {gameOver && (
        <TouchableOpacity
          style={{
            marginTop: 20,
            padding: 15,
            backgroundColor: "#D32F2F",
            borderRadius: 5,
          }}
          onPress={resetGame}
        >
          <Text
            style={{
              color: "white",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Restart Game
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SnakeGame;
