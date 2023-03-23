function cardnum(x){
        let countOdd = 0; 
        let countEven = 0;
        let k = x.length;
        for(let i = k - 1; i >= 0; i--){
                let corval = parseInt(x[i]);
                if(i%2!==0){
                        countOdd += corval;
                }
                else{
                        corval *= 2; 
                        if(corval > 9){
                                corval -= 9;
                                countEven += corval;
                        } 
                        else{
                                countEven += corval;
                        }
                }

                        // console.logcorval)    
                } let sum = countOdd + countEven;
                if(sum % 10 == 0) 
                return 'valid';
                else 
                return 'invalid'

        }
        
        //let x = "1234596791078989";
        cardnum(x)//

        
