for(let i = 1; i <= 2; i++){            // 1 1
  for(let j = 1; j <= 3; j++){          // 1 2
    console.log(i, j);                  // 1 3
  }                                     // 2 1
}                                       // 2 2
                                        // 2 3


for(let i = 1; i <= 3; i++){            // 1 1
  for(let j = 1; j <= i; j++){          // 2 1
    console.log(i, j);                  // 2 2
  }                                     // 3 1
}                                       // 3 2
                                        // 3 3


for(let i = 1; i <= 3; i++){            // 1 1
  for(let j = 1; j <= 3; j++){          // 1 3
    if(j === 2) continue;               // 2 1
    console.log(i, j);                  // 2 3
  }                                     // 3 1
}                                       // 3 3


for(let i = 1; i <= 3; i++){            // 1 1
  for(let j = 1; j <= 3; j++){          // 2 1
    if(j === 2) break;                  // 3 1
    console.log(i, j);
  }
}




for(let i = 2; i < 3; i++){
  for(let j = 0; i < 3; j++){
    console.log(i, j);
  }
}                                   // infinite loop




for(let i = 3; i > 0; i--){         // 3 3
  for(let j = i; j > 0; j--){       // 3 2
    console.log(i, j);              // 3 1
  }                                 // 2 2
}                                   // 2 1
                                    // 1 1




for(let i = 0; i < 3; i++){         // 0 0
  for(let j = 0; j < 2; j++){       // 1 1
    console.log(i, j);
    i++;
  }
}


for(let i = 1; i <= 3; i++){        // 1
  for(let j = 1; j <= 3; j++){      // 2
    console.log(i * j);             // 3
  }                                 // 2
}                                   // 4
                                    // 6
                                    // 3
                                    // 6
                                    // 9


for(let i = 1; i <= 3; i++){         // 1 1
  for(let j = i; j <= 3; j++){       // 1 2
    console.log(i, j);               // 1 3
  }                                  // 2 2
}                                    // 2 3
                                     // 3 3


for(let i = 1; i <= 3; i++){                // 1 3
  for(let j = 1; j <= 3; j++){              // 2 2  
    if(i + j > 3) console.log(i, j);        // 2 3    
  }                                         // 3 1
}                                           // 3 2
                                            // 3 3



