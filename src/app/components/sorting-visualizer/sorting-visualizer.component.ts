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
  constructor() { }

  ngOnInit(): void {
    this.generateNewArray();
  }
  sortingSpeed(){
    console.log("value>>",this.value);
    if(this.value < 10){
      this.value = 10;
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
    const background = 'rgba(66, 134, 244, 0.8)';
    for(let i=0;i<this.value;i++){
      let number = this.generateRandomElements()*10;
      if(number < 10){
        width = 0;
        number = 0;
      }else{
        width =  Math.floor(window.innerWidth / this.value * 3);
      }
      this.array.push({number,width,numMargin,background});
    }
    console.log(this.array);
  }
  onSelectionChange(event){
    this.selectedAlgorithm = event.target.value;
    switch(this.selectedAlgorithm){
      case 'bubble':
        this.bubbleSort();
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

  private bubbleSort(){
    this.animationArray = this.animateBubbleSort(this.array);
    // const arrayBars = document.getElementsByClassName('sorting-div');
    // console.log("arrayBars>>>",arrayBars);
    for(let i=0;i<this.animationArray.length;i++){
      const {comparison, swap} = this.animationArray[i];
      console.log(comparison,"  ",swap);
    }
  }
  private animateBubbleSort(array):Array<any>{
    let newArray=[];
    for(let i=0;i< array.length-1;i++){
      for(let j=0;j<array.length-i-1;j++){
        let obj:any = {};
        obj.comparison = [j,j+1];
        obj.swap = false;
        if(array[j].number > array[j+1].number){
          let temp = array[j].number;
          array[j].number = array[j+1].number;
          array[j+1].number = temp;
          obj.swap = true;
        }
        newArray.push(obj);
      }
    }
    return newArray;
  }
  private insertionSort(){
    for(let i = 0 ; i < this.array.length ;i++){

      for(let j=0;j<=i;j++){
        if(this.array[i].number<this.array[j].number){
          let temp = this.array[i].number;
          this.array[i].number = this.array[j].number;
          this.array[j].number = temp;
        }
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
