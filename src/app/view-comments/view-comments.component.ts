import { Component, OnInit,Inject } from '@angular/core';
import { CustomersService } from '../customers.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';



@Component({
  selector: 'app-view-comments',
  templateUrl: './view-comments.component.html',
  styleUrls: ['./view-comments.component.css']
})
export class ViewCommentsComponent implements OnInit {
comments:Array<Comment> ; 
    constructor(private customerService: CustomersService, 
        public dialogRef: MatDialogRef<ViewCommentsComponent>,
         @Inject(MAT_DIALOG_DATA) public data: any) { }


  ngOnInit (){
      this.customerService.getComments(this.data.customer_id).subscribe((resp)=>{
          this.comments = resp ; 
         

      })
  }
  
 
    addComment(){}

}
