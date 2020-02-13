

let A = [10,4,5,1,23,9]


function InsertionSort(Data)
{
    if(Array.isArray(Data))
    {
        let key = 0;
        let i = 0;
        for(j = 1; j < Data.length; j++)
        {
            key = Data[j];g
            i = j -1;
            while( i >= 0 && Data[i] > key)
            {
                Data[i + 1] = Data[i];
                i--;
            }
            Data[i + 1] = key;
        }
    }
    return Data;
}


console.log(InsertionSort(A));