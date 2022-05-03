// -------------------- Packages -----------------

// --------------------- Models ------------------

// --------------------- Errors ------------------
// import { CustomError } from './DummyData.errors';

// ------------------- Components ----------------

// -------------------- Services -----------------
//import { ImportedService } from './imported.service';
import { DatabaseService } from "../../services/database/database.service";

// --------------------- Types -------------------

export class DummyDataService {
  private static _instance: DummyDataService;
  private databaseService = DatabaseService.Instance;
  //private importedService: ImportedService;

  public static get Instance() {
    // Do you need arguments? Make it a regular static method instead.
    return this._instance || (this._instance = new this());
  }

  private constructor() {
    //this.importedService = ImportedService.Instance;
  }

  public async insertDummyNFTData(): Promise<void> {
    this.databaseService.connection // This gets you a PrismaClient connected to the database

    //TODO Generate dummy data for nft artworks here and push them into the database

  }

  public async insertDummyUserData(): Promise<void> {
    this.databaseService.connection // This gets you a PrismaClient connected to the database

    //TODO Generate dummy data for a user and add him to the database

  }
}
