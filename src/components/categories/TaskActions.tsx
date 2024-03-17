import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { ITaskRequest } from "types";

type TaskActionsProp = {
  categoryId: string;
};

const todayDate = new Date().toISOString();

const TaskActions = ({ categoryId }: TaskActionsProp) => {
  const [newTask, setNewTask] = useState<ITaskRequest>({
    categoryId: categoryId,
    date: todayDate,
    isCompleted: false,
    name: "",
  });

  return (
    <View className="bg-lightGray py-3 px-4 rounded-lg">
      <TextInput
        className="p-1 text-base"
        placeholder="Create a new task"
        value={newTask.name}
        onChangeText={(text) => {
          setNewTask((prev) => {
            return {
              ...prev,
              name: text,
            };
          });
        }}
      />
    </View>
  );
};

export default TaskActions;
