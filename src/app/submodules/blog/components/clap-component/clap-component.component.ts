import { Component, Input, OnInit } from '@angular/core';
import { InmemorydataService } from '../../services/inmemorydata.service';

@Component({
  selector: 'app-clap-component',
  templateUrl: './clap-component.component.html',
  styleUrls: ['./clap-component.component.scss']
})
export class ClapComponentComponent implements OnInit {

  show:boolean;
  @Input() blogId: number;
  constructor(private inmemorydata: InmemorydataService) { }

  ngOnInit(): void {
    if(localStorage.getItem(this.blogId.toString())){
      this.show = true;
    }else{
      this.show = false;
    }
  }
  changeColor(){
    this.show = !this.show;
    console.log(this.show);
    if(this.show){
      this.increaseCount(this.blogId);
    }else{
      this.decreaseCount(this.blogId);
    }
  }
  private increaseCount(blogId: number){
    this.inmemorydata.increaseThumbsUpCount(blogId);
  }
  private decreaseCount(blogId: number){
    this.inmemorydata.decreaseThumbsUpCount(blogId);
  }
}
