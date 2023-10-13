export function factorial(x:number):number{
    if(x<0||x==0||x>15){
        if (x==0){
        return 1;
        }else{
        return 0;
        }
    }else{
        var result=1;
        for(var valor=1; valor<=x; valor++){
        result*=valor;
        }
        return result;
    }
}
