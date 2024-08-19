import { Component, NgModule, OnInit } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { pipe } from 'rxjs';
import { SearchplayerPipe } from '../../searchplayer.pipe';
@Component({
  selector: 'app-players',
  standalone: true,
  imports: [CommonModule, RouterModule,FormsModule , SearchplayerPipe],
  templateUrl: './players.component.html',
  styleUrl: './players.component.css',
})
export class PlayersComponent implements OnInit {
  players: any;
  searchName:any;
  isLoading = true
  constructor(private apiPlayer: ApiServiceService) {}

  ngOnInit(): void {
    this.getPlayers();
  }

  getPlayers() {
    this.apiPlayer.getPlayerData().subscribe((res) => {
      console.log(res , 'players data ');
      this.players = res;
      this.isLoading = false
    });
  }

  deletePlayer(id: string) {
    const replay = confirm('Are you sure to delete record with id ' + id + '..?');
    this.apiPlayer.deletePlayers(id).subscribe(() => {
      if (replay == true) {
        alert(`The ${id} is deleted successfully..!`);
        this.getPlayers();
      }
    });
  }
  
}
