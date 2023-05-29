#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

int main() {
    char ch[1000];
    scanf("%s", ch);
    int count[10] = {0};
    for(int i=0; ch[i]!='\0'; i++){
        
        int digit = ch[i] - '0';
        
        if(digit >= 0 
            && digit <= 9){
            count[digit]++;    
        }
    }
    
    for(int i=0; i<10; i++){
        printf("%d ", count[i]);
    }
    printf("\n");
    /* Enter your code here. Read input from STDIN. Print output to STDOUT */    
    return 0;
}
