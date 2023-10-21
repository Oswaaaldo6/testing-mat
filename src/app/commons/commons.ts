export class Calcular{
    static sumarX(array:number[]):number{
        var suma=0;
        for(let i=0; i<array.length; i++){
            suma+=array[i];
        }
        return suma;
    }

    static sumarY(array:number[]):number{
        var suma=0;
        for(let i=0; i<array.length; i++){
            suma+=array[i];
        }
        return suma;
    }

    static sumarX2(array:number[]):number{
        var suma=0;
        for(let i=0; i<array.length; i++){
            suma+=(array[i]*array[i]);
        }
        return suma;
    }

    static sumarY2(array:number[]):number{
        var suma=0;
        for(let i=0; i<array.length; i++){
            suma+=(array[i]*array[i]);
        }
        return suma;
    }

    static sumarXY(x:number[], y:number[]):number{
        var suma=0;
        for(let i=0; i<x.length; i++){
            suma+=(x[i]*y[i]);
        }
        return suma;
    }
}