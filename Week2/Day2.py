deanna = "deanna"

def deannasFunction():
      
      deannasName = "deanna"
      print(deanna)
      return deannasName

class User:
  def __init__(self, firstName, lastName):
        self.firstName = firstName
        self.lastName = lastName

  def __init__(self, address):
        self.address = address
        address = [address]
        address.append(deannaAddress)
  
        
class Address(User):
    def __init__(self, firstName, lastName, street, city, state, zip_code, addresses):
          super().__init__(firstName, lastName, addresses)
          self.street = street
          self.city = city
          self.state = state
          self.zip_code = zip_code

deannaAddress = Address("Deanna", "Masters", "123 main st", "marietta", "ga", "30060", "addresses")
print(deanna.street)