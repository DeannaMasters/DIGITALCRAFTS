myDict = {}
userCommand = ""
list = []


print("\nWelcome to your Grocery App!\nPlease select an option:")

class Store:
    def __init__(self, name, address):
        self.name = name
        self.address = address

kroger = {
    "store_name": "Kroger",
    "store_address": "123 Main st",
}

walmart = {
    "store_name": "Walmart",
    "store_address": "124 Main st",
}

costco = {
    "store_name": "Costco",
    "store_address": "125 Main st",
}

# add = input

mainMenu = '''
    PRESS 1A TO ADD A KROGER LIST, PRESS 1B TO ADD A WALMART LIST, PRESS 1C TO ADD A COSTCO LIST
    PRESS 2 TO VIEW TASK LIST
    PRESS 3 TO DELETE LIST
    PRESS Q TO QUIT LIST
    '''

while userCommand != "Q":
    userCommand = input(mainMenu)

    if userCommand == "1A":
        print ("Welcome to your Kroger shopping list!")
        # store_name = input("Please enter your store name: ")
        grocery_item = input("Please enter your grocery item: ")
        # list.append(grocery_item)
        quantity = input("Please enter the quantity: ") 
        cost = input("Please enter the price/item: ")
        shoppingIndex = len(list) + 1
        indexedShoppingList = str(grocery_item) + (quantity) + (cost)
        list.append(indexedShoppingList)
        continu = input("\nShould we add another item or quit?")
        
        # \nPress M for Menu, press Q to quit: (Selection is Case Sensitive) ")

    if userCommand == "1B":
        print ("Welcome to your Walmart shopping list!")
        # store_name = input("Please enter your store name: ")
        grocery_item = input("Please enter your grocery item: ")
        # list.append(grocery_item)
        quantity = input("Please enter the quantity: ") 
        cost = input("Please enter the price/item: ")
        shoppingIndex = len(list) + 1
        indexedShoppingList = str(grocery_item) + (quantity) + (cost)
        list.append(indexedShoppingList)
        continu = input("\nShould we add another item or quit?\nPress M for Menu, press Q to quit: (Selection is Case Sensitive) ")

        if userCommand == "1C":
            print ("Welcome to your Costco shopping list!")
        # store_name = input("Please enter your store name: ")
        grocery_item = input("Please enter your grocery item: ")
        # list.append(grocery_item)
        quantity = input("Please enter the quantity: ") 
        cost = input("Please enter the price/item: ")
        shoppingIndex = len(list) + 1
        indexedShoppingList = str(grocery_item) + (quantity) + (cost)
        list.append(indexedShoppingList)
        continu = input("\nShould we add another item or quit?\nPress M for Menu, press Q to quit: (Selection is Case Sensitive) ")

    if userCommand == "2":
        print("Here is your SHOPPING LIST:\n") 
        print(list)

    if userCommand == "3":
        print("DELETION\nHere is your grocery list:\n", list)
        Delete = int(input("Which item would you like remove?\n (PLEASE INPUT CORRESPONDING NUMERICAL CHOICE!)" )) - 1
        print(f"\ngrocery_item {list[grocery_itemdelete]}   :Has been DELETED!\n")
        del list[grocery_itemDelete]
        print("\n Returning to MAIN MENU")
    
    if userCommand == "Q":
        print("Goodbye!") 
        quit

# list.append( Store('Kroger:', '123 Main St') )
# list.append( Store('Walmart:', '124 Main St') )
# list.append( Store('Costco:', '125 Main St') )

# for obj in list:
#     print( obj.name, obj.address, sep =' ')
        # list.append(create_list)
        # Choice = input("Press 1 to add task\n Press 2 to delete task\n Press 3 to view all tasks\n Press q to quit")

        # print("\n" + storeName + " is added to your Grocery App!")