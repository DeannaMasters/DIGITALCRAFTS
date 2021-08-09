toDoList = []
choice = ""
print("This Is Your To-Do List!")

mainMenu = ("""\nPress 1: Add Task\nPress 2: Delete Task\nPress 3: View Tasks\nPress q: Quit\nEnter your Choice: """) 

priority = {"Low : [], Medium" : [], "High" : []}

while choice != "q":
    choice = input(mainMenu)
    
    if choice == "1":
        taskName = input("Enter the task you need to do: "" ")
        priority = input("Enter the priority of the task (Low, Medium, High)"" ")
        taskNameIndex = len(toDoList) + 1
        newTask = taskName + " " + priority
        toDoList.append(newTask)
        print(taskName + " is added to your ToDoList!")
        
    elif choice == "2":
        print("Your Current Tasks:", toDoList)
        taskNameDelete = int(input("Which task do you want to delete?")) - 1
        print(f"\nTODO {toDoList[taskNameDelete]} +  "" has been deleted!")
        del toDoList[taskName]
        print("Updated To Do List ", toDoList)

    elif choice == "3":
       
        print("toDoList:/n", toDoList)

    elif choice == "q":
        print("Goodbye!")
