import time

class Characters:
    def __init__(self, name, health):
            self.name = name
            self.health = health
    def takeDamage(self, decreaseHealth):
            self.health -= decreaseHealth
    def checkHealth(self):
            print(self.health)

def viewMenu():
        print("\nChoose Wisely:")
        print("\nPress 1 to cast Expelliarmus (attack)")
        print("Press 2 to cast Stupefy (attack)")
        print("Press 3 to cast Petrificus Totalus (attack)")
        print("Press 4 to cast Disillusionment Charm (blend into surroundings)") 
        print("Press 5 to check health status")
        print("Press Q to Quit")
        print("*************************************************************************************************")
character1 = Characters("Harry Potter", 80)
character2 = Characters("Voldemort", 100)

userInput = ""

print("\nVoldemort:\nHarry Potter, I now speak directly to you.")
time.sleep (2)
print("On this night, you have allowed your friends to die for you rather than face me yourself.")
time.sleep (3) 
print("There is no greater dishonor.")
time.sleep (2) 
print("Join me in the Forbidden Forest and confront your fate.") 
time.sleep (2)
print("If you do not do this, I shall kill every last man, woman, and child who tries to conceal you from me.")
time.sleep (3)

print("\nDumbledore:\nIt is our choices, Harry, that show what we truly are, far more than our abilities.\n")
time.sleep (3)

print("Harry:\nI Solemnly Swear That I Am Up To No Good.")
time.sleep (3)
print("**********************************************************************************************************")

startGame = True
while startGame:
    viewMenu()
    
    userInput = input("\nWhat would you like to do?\n ")

    if userInput == "1":
        character1.takeDamage(10)
        print(" *Ouch! My scar is hurting!! You lost 10 health points.*")
        if character1.health <= 0:
            print(" **\nTo the well-organized mind, death is but the next great adventure**\n*NOX*\nGAME OVER\n")
            startGame = False
    
    elif userInput == "2":
        character2.takeDamage(20)
        print(" *You'll pay for this Potter!! Voldemort just lost 20 points!*")
        if character2.health <= 0:
            print(" \n**MISCHIEF MANAGED!**\n*NOX*\nGAME OVER\n")
            startGame = False
    
    elif userInput == "3":
        character2.takeDamage(10)
        print(" *You just froze ol' Voldy! He lost 10 points!*")
        if character2.health <= 0:
            print(" \n**MISCHIEF MANAGED!**\n*NOX*GAME OVER\n")
            startGame = False
    
    elif userInput == "4":
        character1.takeDamage(15)
        print(" *I am the Dark Lord, I can see through your charm! You just lost 15 points!*")
        if character1.health <= 0:
            print(" \n**To the well-organized mind, death is but the next great adventure.**\n*NOX*\nGAME OVER\n")
            startGame = False
    
    elif userInput == "5":
        print("Harry Potter's health is " + str(character1.health))
        print("The Voldemort's health is " + str(character2.health))

    
    elif userInput == "Q":
        print("Goodbye!")

    
    else:
        print("INCORRECT INPUT!\nOPTIONS ARE 1, 2, 3, 4. 5, OR Q")
 

    