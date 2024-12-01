import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IVesselVisit } from 'src/app/core/interfaces/vessel-visit.interface';
import { getVesselVisit as getDetachedVesselVisit } from 'src/app/state/detached-load/detached-load.actions';
import { getVesselVisit as getContainerizedVesselVisit } from 'src/app/state/containerized-load/containerized-load.actions';

@Component({
  selector: 'app-load-search-result',
  templateUrl: './load-search-result.component.html',
  styleUrls: ['./load-search-result.component.css']
})
export class LoadSearchResultComponent implements OnInit {

  @Input() public detached: boolean = false;
  @Input("data") public dataSource: any = {};
  @Input() public vesselVisit: IVesselVisit | null = null;

  public displayedColumns = ["container", "idContainer", "inches", "actions"];

  constructor(private readonly store: Store) { }

  ngOnInit(): void {
    if (this.detached) this.displayedColumns = ["cargo", "peso", "cantidad", "dest", "actions"];

    if(this.detached) this.store.dispatch(getDetachedVesselVisit({ vesselVisitID: this.dataSource[0].vesselVisitId }));
    else this.store.dispatch(getContainerizedVesselVisit({ vesselVisitID: this.dataSource[0].carrierVisit }));
  }
}
