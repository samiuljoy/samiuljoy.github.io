+++++++++++++++++head
.title: Calculate prime numbers
.author: Samiul Ahmed Joy
.description: Calculating prime numbers
.style: ..//css/maind.css
.style: ..//css/main.css
-------------------head

++++navigation
.homepage: [home](..//index.html)
.navmenu: roam
.navpage: [demo](..//demo/base.html)
.navpage: [microblog](..//microblog/base.html)
.navpage: [projects](..//projects/base.html)
.navpage: [academics](..//academics/base.html)
.backpage: [base](base.html)
----------navigation

++++++++++++++++main
.ce header2: Prime Number

Calculate prime numbers upto 30

```1
	#include <stdio.h>
	
	int i,j,isprime;
	
	int main() {
		for (i=2; i<=30; i++) {
			isprime=1;
			printf("Value of i %d\n", i);
	
			for(j=2; j<i; j++) {
				printf("Value of j %d\n", j);
				if(i%j==0) {
					isprime=0;
					break;
				}
			}
			if (isprime==1) {
			printf("Prime Numbers %d\n",i);
		}
	
		}
		return 0;
	}
```
.code1


