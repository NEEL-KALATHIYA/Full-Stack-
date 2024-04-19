function find_Odd_Even(n){
    let result;

    if(n%2==0)
        result = "even";
    else
        result = "odd";

        return result;
}

const n = process.argv[2];

console.log(find_Odd_Even(n));