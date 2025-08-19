import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgIf, NgForOf, DatePipe } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.html',
  styleUrls: ['./profile.css'],
  imports: [NgIf, NgForOf, DatePipe],
})
export class ProfileComponent implements OnInit {
  id: string = '';
  userData: any = {};
  repoData: any[] = [];
  loadingUser: boolean = true;
  loadingRepos: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.id = idParam;
      this.loadUserData(idParam);
      this.loadRepoData(idParam);
    }
  }

  private loadUserData(username: string) {
    this.loadingUser = true;
    this.http.get(`https://api.github.com/users/${username}`).subscribe({
      next: (data) => {
        this.userData = data ?? {};
        this.loadingUser = false;
      },
      error: (err) => {
        console.error('Erro ao buscar usuário:', err);
        this.userData = {};
        this.loadingUser = false;
      },
    });
  }

  private loadRepoData(username: string) {
    this.loadingRepos = true;
    this.http.get<any[]>(`https://api.github.com/users/${username}/repos`).subscribe({
      next: (data) => {
        this.repoData = [...(data ?? [])]
          .sort((a, b) => (b.stargazers_count ?? 0) - (a.stargazers_count ?? 0))
          .slice(0, 4);
        this.loadingRepos = false;
      },
      error: (err) => {
        console.error('Erro ao buscar repositórios:', err);
        this.repoData = [];
        this.loadingRepos = false;
      },
    });
  }

  submit(valor: string) {
    if (!valor) return;
    this.id = valor;
    this.loadUserData(valor);
    this.loadRepoData(valor);
    this.router.navigate([`/profile/${valor}`]);
  }

  get hasUserData(): boolean {
    return !!this.userData?.login;
  }
}
