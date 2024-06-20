import { Injectable } from '@angular/core';
import { TreeNode } from 'primeng/api';

@Injectable({providedIn : "root"})
export class dataModule{
    searchName: string = '';
    getName(){
        return this.searchName
    }
    updateSearchName(name: string): void {
        this.searchName = name;
      }
    level1 = '#4F5694'
    level2 ='#F15614'
    level3 = '#008C88'
    level4 = '#CC006B'
    level5 = '#9A4443'
    level6 = ''
    data: TreeNode[] = [
        {
            key: "1",
            expanded: true,
            type: 'person',
            styleClass: 'bg-indigo-500 text-white',
            data: {
                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                name: 'Amy Elsner',
                title: 'CEO',
                selected: false,
                background:this.level1,
            },
            children: [
                {
                    key: "2",
                    expanded: true,
                    type: 'person',
                    styleClass: 'bg-purple-500 text-white',
                    data: {
                        image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png',
                        name: 'Anna Fali',
                        title: 'CMO',
                        selected: false,
                        background:this.level2,
                    },
                    children: [
                        {
                            key: "11",
                            expanded: true,
                            type: 'person',
                            styleClass: 'bg-teal-500 text-white',
                            data: {
                                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png',
                                name: 'Stephen Shaw',
                                title: 'CTO',
                                selected: false,
                                background:this.level3,
                            },
                            children: [
                                {
                                    key: "4",
                                    expanded: true,
                                    type: 'person',
                                    styleClass: 'bg-teal-500 text-white',
                                    data: {
                                        image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png',
                                        name: 'Murali Madhav',
                                        title: 'CTO',
                                        selected: false,
                                        background:this.level4,

                                    },
                                    children: [
                                        {
                                            key: "4",
                                            expanded: true,
                                            type: 'person',
                                            styleClass: 'bg-teal-500 text-white',
                                            data: {
                                                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png',
                                                name: 'Mukesh Parag',
                                                title: 'CTO',
                                                selected: false,
                                                background:this.level5,
                                            }
                                        },
                                    ]
                                },
        
                            ]
                        },
                        {
                            key: "11",
                            expanded: true,
                            type: 'person',
                            styleClass: 'bg-teal-500 text-white',
                            data: {
                                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png',
                                name: 'Ankita Singh',
                                title: 'CTO',
                                selected: false,
                                background:this.level3,
                            },
                            children: [
                                {
                                    key: "4",
                                    expanded: true,
                                    type: 'person',
                                    styleClass: 'bg-teal-500 text-white',
                                    data: {
                                        image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png',
                                        name: 'Warren Buffet',
                                        title: 'CTO',
                                        selected: false,
                                        background:this.level4,
                                    },
                                    children: [
                                        {
                                            key: "4",
                                            expanded: true,
                                            type: 'person',
                                            styleClass: 'bg-teal-500 text-white',
                                            data: {
                                                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png',
                                                name: 'Priya Goyal',
                                                title: 'CTO',
                                                selected: false,
                                                background:this.level5,
                                            }
                                        },
                                    ]
                                },
                            ]
                        },
                    ]
                },
                {
                    key: "3",
                    expanded: true,
                    type: 'person',
                    styleClass: 'bg-teal-500 text-white',
                    data: {
                        image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png',
                        name: 'Suresh Prabhu',
                        title: 'CTO',
                        selected: false,
                        background:this.level2,
                    },
                    children: [
                        {
                            key: "4",
                            expanded: true,
                            type: 'person',
                            styleClass: 'bg-teal-500 text-white',
                            data: {
                                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png',
                                name: 'Soumitra Mishra',
                                title: 'CTO',
                                selected: false,
                                background:this.level3,
                            },
                            children: [
                                {
                                    key: "4",
                                    expanded: true,
                                    type: 'person',
                                    styleClass: 'bg-teal-500 text-white',
                                    data: {
                                        image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png',
                                        name: 'Mike Ronty',
                                        title: 'CTO',
                                        selected: false,
                                        background:this.level4,
                                    }
                                },
        
                            ]
                        },
                        {
                            key: "4",
                            expanded: true,
                            type: 'person',
                            styleClass: 'bg-teal-500 text-white',
                            data: {
                                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png',
                                name: 'Gladden Rumero',
                                title: 'CTO',
                                selected: false,
                                background:this.level3,
                            },
                            children: [
                                {
                                    key: "4",
                                    expanded: true,
                                    type: 'person',
                                    styleClass: 'bg-teal-500 text-white',
                                    data: {
                                        image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png',
                                        name: 'Praveen Mahato',
                                        title: 'CTO',
                                        selected: false,
                                        background:this.level4,
                                    }
                                },
                                {
                                    key: "4",
                                    expanded: true,
                                    type: 'person',
                                    styleClass: 'bg-teal-500 text-white',
                                    data: {
                                        image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png',
                                        name: 'Anant Mithal',
                                        title: 'CTO',
                                        selected: false,
                                        background:this.level4,
                                    }
                                },
        
                            ]
                        },

                    ]
                },
                {
                    key: "5",
                    expanded: true,
                    type: 'person',
                    styleClass: 'bg-purple-500 text-white',
                    data: {
                        image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png',
                        name: 'John Furry',
                        title: 'CFO',
                        selected: false,
                        background:this.level2,
                    },
                    children: [{
                        key: "6",
                        expanded: true,
                        type: 'person',
                        styleClass: 'bg-purple-500 text-white',
                        data: {
                            image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png',
                            name: 'Hritik',
                            title: 'CHRO',
                            selected: false,
                            background:this.level3,
                        }
                    },
                    {
                        key: "7",
                        expanded: true,
                        type: 'person',
                        styleClass: 'bg-purple-500 text-white',
                        data: {
                            image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png',
                            name: 'Manish Sir',
                            title: 'Manager',
                            selected: false,
                            background:this.level3,
                        },
                        children: [{
                            key: "8",
                            expanded: true,
                            type: 'person',
                            styleClass: 'bg-purple-500 text-white',
                            data: {
                                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png',
                                name: 'Himesh Kumar',
                                title: 'CHRO',
                                selected: false,
                                background:this.level4,
                            }
                        },
                        {
                            key: "9",
                            expanded: true,
                            type: 'person',
                            styleClass: 'bg-purple-500 text-white',
                            data: {
                                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png',
                                name: 'Neeraj Choudhary',
                                title: 'CHRO',
                                selected: false,
                                background:this.level4,
                            }
                        }, {
                            key: "10",
                            expanded: true,
                            type: 'person',
                            styleClass: 'bg-purple-500 text-white',
                            data: {
                                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png',
                                name: 'Anuj Kumar Singh',
                                title: 'CHRO',
                                selected: false,
                                background:this.level4,
                            }
                        }]
                    }
                    ]
                }
            ]
        }
    ];

    getData(): TreeNode[] {
        return this.data;
      }

      findNodeByName(name: string): TreeNode | null {
        return this.findNodeRecursive(this.data, name);
      }
      private findNodeRecursive(nodes: TreeNode[], name: string): TreeNode | null {
        
        for (let node of nodes) {
            if (node.data.selected) {
                node.data.selected = false;
              }
          if (node.data.name.toLowerCase().includes(name.toLowerCase()) && name !== "") {
            node.data.selected = true;
            // return node;
          }
          if (node.children) {
            let found = this.findNodeRecursive(node.children, name);
            if (found) {
            //   return found;
            }
          }
        }
        return null;
      }
}