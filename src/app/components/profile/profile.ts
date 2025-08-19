import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DatePipe, NgForOf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.html',
  styleUrls: ['./profile.css'],
  imports: [DatePipe, NgForOf],
})
export class ProfileComponent implements OnInit {
  id!: string;
  userData: any;
  repoData: any[] = [];

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {}

  orderByStar(repoStars: any[]) {
    this.repoData = [...repoStars].sort((a, b) => b.stargazers_count - a.stargazers_count);
    this.repoData = this.repoData.splice(0, 4);
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')!;

    this.http.get(`https://api.github.com/users/${this.id}`).subscribe({
      next: (data) => {
        this.userData = data;
      },
      error: (err) => console.error('Erro ao buscar usuário:', err),
    });

    this.http.get<any[]>(`https://api.github.com/users/${this.id}/repos`).subscribe({
      next: (data) => {
        this.orderByStar(data);
      },
      error: (err) => console.error('Erro ao buscar repositórios:', err),
    });
  }

  submit(valor: string) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([`/profile/${valor}`]).then(() => {});
      window.location.reload();
    });
  }
}
