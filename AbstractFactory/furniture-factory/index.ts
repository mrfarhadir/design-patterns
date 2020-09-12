interface Chair {
    legs: number,
    arms: number,
    material: string
}

interface CoffeeTable {
    legs: number,
    material: string,
    hasGlass: boolean
}

interface Sofa {
    legs: number,
    arms: number,
    material: string
}

interface FurnitureFactory {
    createChair(): Chair,
    createCoffeeTable(): CoffeeTable,
    createSofa(): Sofa
}


class ModernFurnitureFactory implements FurnitureFactory{
    createChair(): Chair {
        return this.createModernChair();
    }

    createCoffeeTable(): CoffeeTable {
        return this.createModernCoffeTable()
    }

    createSofa(): Sofa {
        return this.createMoernSofa()
    }

    private createModernChair(): Chair {
        let chair: Chair = {} as Chair;
        chair.arms = 0;
        chair.legs = 1;
        chair.material = 'Aluminium';
        return chair
    }

    private createModernCoffeTable(): CoffeeTable {
        let coffeeTable: CoffeeTable = {} as CoffeeTable;
        coffeeTable.hasGlass = true;
        coffeeTable.legs = 2;
        coffeeTable.material = 'Aluminium';
        return coffeeTable
    }

    private createMoernSofa(): Sofa {
        let sofa: Sofa = {} as Sofa;
        sofa.arms = 0;
        sofa.legs = 1;
        return sofa
    }

}

class OldFurnitureFactory implements FurnitureFactory{
    createChair(): Chair {
        return this.createOldChair();
    }

    createCoffeeTable(): CoffeeTable {
        return this.createOldCoffeTable();
    }

    createSofa(): Sofa {
        return this.createOldSofa();
    }

    private createOldChair(): Chair {
        let chair: Chair = {} as Chair;
        chair.arms = 2;
        chair.legs = 2;
        chair.material = 'Wood';
        return chair
    }

    private createOldCoffeTable(): CoffeeTable {
        let coffeeTable: CoffeeTable = {} as CoffeeTable;
        coffeeTable.hasGlass = false;
        coffeeTable.legs = 4;
        coffeeTable.material = 'Wood';
        return coffeeTable
    }

    private createOldSofa(): Sofa {
        let sofa: Sofa = {} as Sofa;
        sofa.arms = 2;
        sofa.legs = 2;
        return sofa
    }

}

const modern = new ModernFurnitureFactory();
const modernSofa: Sofa = modern.createSofa();
console.log(modernSofa);


const old = new OldFurnitureFactory();
const oldCoffeeTable: CoffeeTable = old.createCoffeeTable();
console.log(oldCoffeeTable);
