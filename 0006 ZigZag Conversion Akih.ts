// 

function convert(s: string, numRows: number): string {
    enum MODE {
        DOWN = 0,
        UP,
    }
    const matrix: string[][] = [];
    const strings: string[] = s.replace(/,/g, '\'').split('');
  
    for(let i = 0; i < numRows; i++) {
      matrix[i] = [];
    }
  
    let pointer: number = 0;
    let x: number = 0;
    let y: number = 0;
    let mode: number = MODE.DOWN;
    let lane: number = 0;
    let _y: number = 0;
  
    while (s.length >= pointer) {
      matrix[0][0] = '1'
      pointer++;
    }
  
    pointer = 0;
    
  
    for(let x = 0; x < s.length; x++) {
      if (strings[pointer] === undefined) break;
      mode = lane % 2 === 0 ? MODE.DOWN : MODE.UP; 
      for(let y = 0; y < numRows; y++ ) {
        if (strings[pointer] === undefined) break;
        if (mode === MODE.DOWN) {
          matrix[y][x] = strings[pointer];
          // console.log(`x: ${x} y: ${y} matrix: ${matrix[y][x]}`)
        } else if (mode === MODE.UP){
          if (numRows === 2) break;
          _y = numRows === 1 ? 0: numRows - y - 2;
          matrix[_y][(x)] = strings[pointer];
          // console.log(`x: ${x} y: ${_y} matrix: ${matrix[_y][x]}`)
          if (_y === 1) {
              y = numRows; 
          }
          (numRows !== 1 && y !== numRows) && x++;
        }
        pointer++
      }
      lane++;
    }
    return matrix.toString().replace(/,/g, '').replace(/'/g, ',');
  };function convert(s: string, numRows: number): string {
  enum MODE {
      DOWN = 0,
      UP,
  }
  const matrix: string[][] = [];
  const strings: string[] = s.replace(/,/g, '\'').split('');

  for(let i = 0; i < numRows; i++) {
    matrix[i] = [];
  }

  let pointer: number = 0;
  let x: number = 0;
  let y: number = 0;
  let mode: number = MODE.DOWN;
  let lane: number = 0;
  let _y: number = 0;

  while (s.length >= pointer) {
    matrix[0][0] = '1'
    pointer++;
  }

  pointer = 0;
  

  for(let x = 0; x < s.length; x++) {
    if (strings[pointer] === undefined) break;
    mode = lane % 2 === 0 ? MODE.DOWN : MODE.UP; 
    for(let y = 0; y < numRows; y++ ) {
      if (strings[pointer] === undefined) break;
      if (mode === MODE.DOWN) {
        matrix[y][x] = strings[pointer];
        // console.log(`x: ${x} y: ${y} matrix: ${matrix[y][x]}`)
      } else if (mode === MODE.UP){
        if (numRows === 2) break;
        _y = numRows === 1 ? 0: numRows - y - 2;
        matrix[_y][(x)] = strings[pointer];
        // console.log(`x: ${x} y: ${_y} matrix: ${matrix[_y][x]}`)
        if (_y === 1) {
            y = numRows; 
        }
        (numRows !== 1 && y !== numRows) && x++;
      }
      pointer++
    }
    lane++;
  }
  return matrix.toString().replace(/,/g, '').replace(/'/g, ',');
};