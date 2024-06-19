import { Injectable } from '@angular/core';
import { TreeNode } from 'primeng/api';

@Injectable({providedIn : "root"})
export class dataModule{
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
                selected: false
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
                        selected: false
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
                                selected: false
                            }
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
                        name: 'Stephen Shaw',
                        title: 'CTO',
                        selected: false
                    },
                    children: [
                        {
                            key: "4",
                            expanded: true,
                            type: 'person',
                            styleClass: 'bg-teal-500 text-white',
                            data: {
                                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png',
                                name: 'Stephen Shaw',
                                title: 'CTO',
                                selected: false
                            }
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
                        selected: false
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
                            selected: false
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
                            selected: false
                        },
                        children: [{
                            key: "8",
                            expanded: true,
                            type: 'person',
                            styleClass: 'bg-purple-500 text-white',
                            data: {
                                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png',
                                name: 'Hritik',
                                title: 'CHRO',
                                selected: false
                            }
                        },
                        {
                            key: "9",
                            expanded: true,
                            type: 'person',
                            styleClass: 'bg-purple-500 text-white',
                            data: {
                                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png',
                                name: 'Hritik',
                                title: 'CHRO',
                                selected: false
                            }
                        }, {
                            key: "10",
                            expanded: true,
                            type: 'person',
                            styleClass: 'bg-purple-500 text-white',
                            data: {
                                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png',
                                name: 'Hritik',
                                title: 'CHRO',
                                selected: false
                            }
                        }]
                    }
                    ]
                }
            ]
        }
    ];
}