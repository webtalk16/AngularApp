import { PipeTransform, Pipe } from 'angular2/core';

@Pipe({
    name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

    transform(value: any[], args: string[]): any[] {
        let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
        return filter ? value.filter((product: any) =>
            product.productName.toLocaleLowerCase().indexOf(filter) != -1) : value;
    }
}