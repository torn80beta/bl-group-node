const fs = require('fs/promises');
const path = require('path');
const { existsSync } = require('node:fs');

// console.log(__dirname);
// console.log(path.join());
// console.log(path.resolve());

const usersPath = path.join(__dirname, '..', 'db', 'users.json');
const dbPath = path.join(__dirname, '..', 'db');
const andriyPath = path.join(__dirname, '..', 'oop', 'Andriy');
// console.log(oopPath);

class FileOperations {
  constructor(path) {
    this.path = path;
  }

  async read() {
    const data = await fs.readFile(this.path, 'utf-8');
    return data;
  }

  display = async () => {
    console.log(await this.read());
  };

  create = async data => {
    return await fs.writeFile(this.path, JSON.stringify(data, null, 2));
  };

  async update(user) {
    const data = await fs.readFile(this.path, 'utf-8');
    const arr = JSON.parse(data);
    arr.push(user);
    return this.create(arr);
  }

  async remove() {
    await fs.unlink(this.path);
  }

  async replace(deleteFolder, newFolder, newFile, data) {
    await fs.rm(deleteFolder, { recursive: true }).then(console.log('Successfully deleted'));
    // console.log(newFolder);
    // console.log(newFile);
    const newFilePath = path.join(newFolder, newFile);
    // console.log(newFilePath);
    const isFolderExists = await existsSync(newFolder);
    if (!isFolderExists) {
      await fs.mkdir(newFolder).then(console.log(`New folder has been created`));
      await fs.writeFile(newFilePath, JSON.stringify(data, null, 2));
    }
  }
}

const file = new FileOperations(usersPath);

// file.display();
const users = [
  { id: '1', name: 'Ira' },
  { id: '2', name: 'Alex' },
  { id: '3', name: 'Volodya' },
];
// file.create(users);
// file.update({ id: '4', name: 'Andiy' });
// file.remove();
file.replace(dbPath, andriyPath, 'friends.json', users); // Delete "db" folder and user.json file, create new folder "Andriy" in "oop" folder and friends.json file in it.

async function tryCatchHandler(callback, data) {
  try {
    await callback(data);
  } catch (error) {
    console.log('ADRIY!!! ', error.message);
  }
}

// tryCatchHandler(file.display.bind(file));

tryCatchHandler(file.create, users);
