import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/sevices/project.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  projects: Project[] = [];

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(){
    this.projectService.getProjects().subscribe((projects: Project[]) => {
       this.projects = projects["projects"];
    }, (err) => {
       console.log(err.error.message);
    });
  }

 

}
