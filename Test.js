function twins (x,y,k,m){
    var n=[], s=[], t=0, j=0;
    k=+prompt("Введите длину массива x:");
    m=+prompt("Введите длину массива y: ");
    for (i=0; i<k; i++){
        x = +prompt("Введите число x:");
        n.push(x);
    }

    for (i=0; i<m; i++){
        y =+prompt("Введите число y:");
        s.push(y);
    }

    if (s.length > n.length){
        for(i=0; i<s.length; i++){
            if(n[j] == s[i]) t++;
                
            if(i==s.length){
                j=j+1;
                i=0;
            }
        }
    }

    if (s.length < n.length){
        for(i=0; i<n.length; i++){
            if(n[i] == s[j]){
            t++;
                if(i==n.length){
                    j=j+1;
                    i=0;
                }
            }
        }
    }
    return alert(s + " " + n + " " + t);
}
    twins();