import { Pipe } from '@angular/core';
import * as _ from 'lodash';

@Pipe({ name: 'orderBy' })
export class OrderBy {
  transform(array, args) {
    return _.sortBy(array, args);
  }
}