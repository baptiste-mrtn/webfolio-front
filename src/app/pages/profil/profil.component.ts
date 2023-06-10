import { Component, SimpleChanges } from '@angular/core';
import { AppToastService } from 'src/app/interfaces/toast-info';
import { ReviewsService } from 'src/app/services/reviews.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent {
  constructor(private reviewsService: ReviewsService, private toastService: AppToastService){}
  selected:string = 'Informations';
  reviews: any = [];

  ngOnInit(){
    this.myReviews();
  }

  ngOnChanges(changes: SimpleChanges){
    console.log(changes)
    if(this.selected == "Commentaires"){
      this.myReviews();
    }
  }

  myReviews(){
    this.reviewsService.myReviews().then((datas)=>{
      this.reviews = datas;
      this.reviews = this.reviews.list;
      console.log(this.reviews);
    })
  }

  delete(id:string){
    this.reviewsService.delete(id).then(()=>{
      this.toastService.showSuccess("Commentaire supprimé avec succès")
    })
  }

}
