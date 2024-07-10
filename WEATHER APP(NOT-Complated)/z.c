#include<stdio.h>

int prime(){
    int a = 1;
    int flag = 0;
    
    for(int i=2;i<a;i++){
        if(a%i==0){
            flag = 1;  // Not Prime
            break;
        }
    }
    return flag;
}

int main(){
    int flag = prime();
    if(flag==0){
        printf("Prime");
    }
    else{
        printf("Not Prime");
    }

    return 0;
}