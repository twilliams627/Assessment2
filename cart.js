///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

const calculateTotal = (accumulator, currentItem) => {
    return accumulator + currentItem.price;
};

// const summedPrice = cart.reduce(calculateTotal, 0);

console.log("Total sum of food", summedPrice);


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

const calcFinalPrice = (cartTotal, couponValue, tax) => {
    const totalWithTax = cartTotal * (1 + tax);
    const finalPrice = totalWithTax - couponValue;

    return finalPrice;
};



//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    1. name: To store the customer's name.
//The data type would be a string since names are represented as text.
    2. email: For storing customers email address
//The data type would be string since email addresses are textual data
    3. phoneNumber: To store a customers phone number
//The data type would be a string as phone numbers are represented as text.
    4. loyaltyPoints: To track the customer's loyalty points.
//Data type would be number as loyalty points are numeric.


*/

/*
    Now, create a customer object following your own
    guidelines.
*/

const customer = {
    name: "LeBron James",
    email: "kingjames@ipromise.org",
    phoneNumber: "236-236-2366",
    loyaltyPoints: 95
};
