import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sorting-visualizer',
  templateUrl: './sorting-visualizer.component.html',
  styleUrls: ['./sorting-visualizer.component.scss']
})
export class SortingVisualizerComponent implements OnInit {

  value = 50;
  array:any[]=[];
  selectedAlgorithm='bubble';
  animationArray:any[]=[];
  speed: any;
  constructor() { }

  ngOnInit(): void {
    this.generateNewArray();
  }
  changeArraySize(){
    // console.log("value>>",this.value);
    if(this.value < 10){
      this.value = 10*2;
    }else{
      this.value *=2;
    }
    this.generateNewArray();
  }

  private generateRandomElements(){
    return Math.floor(Math.random() * (this.value - 5 + 1) + 5);
  }

  generateNewArray(){
    
    this.array = [];
    let width = 0;
    const numMargin = this.value < 5 ?
      10 : this.value < 8 ?
        8 : this.value < 11 ?
          6 : this.value < 20 ?
            4 : this.value < 50 ?
              3.5 : this.value < 100 ?
                3 : this.value < 130 ?
                  2.5 : 2;
    this.speed = numMargin*1000;
    const background = 'rgba(66, 134, 244, 0.8)';
    for(let i=0;i<this.value;i++){
      let number = this.generateRandomElements()*10;
      if(number < 10){
        width = 0;
        number = 0;
      }else{
        width =  Math.floor(window.innerWidth / this.value * 3);
        console.log("width>>>",width);
      }
      this.array.push({number,width,numMargin,background});
    }
    // console.log(this.array);
  }
  onSelectionChange(event){
    this.selectedAlgorithm = event.target.value;
    switch(this.selectedAlgorithm){
      case 'bubble':
        this.bubbleSort(this.array);
        // this.animateBubbleSort();
        break;
      case 'insertion':
        this.insertionSort();
        break;
      case 'selection':
        this.selectionSort();
        break;
      default:
        break;
    }
  }

  
  private bubbleSort(array){
    for(let i=0;i< array.length-1;i++){
      for(let j=0;j<array.length-i-1;j++){
        setTimeout(() => {
          if(array[j].number > array[j+1].number){
            array[j].background = 'red';
            array[j+1].background = 'red';
            let temp = array[j].number;
            array[j].number = array[j+1].number;
            array[j+1].number = temp;
          }
        }, i*10);
        setTimeout(() => {
          array[j].background = 'rgba(66, 134, 244, 0.8)';
          array[j+1].background = 'rgba(66, 134, 244, 0.8)';
        }, (i+1)*10);

      }
    }
  }

  private updateArrayDiv(array,color,height){

  } 

  private insertionSort(){
    for(let i = 0 ; i < this.array.length ;i++){

      for(let j=0;j<=i;j++){
        setTimeout(() => {
          if(this.array[i].number>this.array[j].number){
            this.array[i].background = 'red';
            this.array[j].background = 'red';
            let temp = this.array[i].number;
            this.array[i].number = this.array[j].number;
            this.array[j].number = temp;
          }
        }, i*10);
        setTimeout(() => {
          this.array[i].background = 'rgba(66, 134, 244, 0.8)';
          this.array[j].background = 'rgba(66, 134, 244, 0.8)';
        }, (i+1)*10);
      }
    }
  }
  private selectionSort(){
    for(let i = 0 ; i < this.array.length ;i++){
      let min = this.array[i].number;
      let pos = i;
      let temp = 0;
      for(let j=i;j<this.array.length;j++){
        if(this.array[j].number<min){
          min = this.array[j].number;
          pos = j;
        }
      }
      temp = this.array[pos].number;
      this.array[pos].number = this.array[i].number;
      this.array[i].number = temp;
    }
  }
}
