# Japan Typography

### Print instructions

The version that is handed in to the [ZHdK](https://www.zhdk.ch/) for the course «CAS Design Cultures 2023» can be found [here](https://typography.japan.signalwerk.ch/CAS-Design-Cultures--Stefan-Huber--print.pdf).

## Development

Install the dependencies:

```bash
npm ci
```

Start the development server:

```bash
npm run dev
```

Open the following url in your browser:

[Admin Interface](http://localhost:1235/)


## Build

Build the project:

```bash
npm run build

# Build the pdf
npm run build:pdf
```

## Print instructions for the booklet

There was a booklet version that can be printed as follows:

First print run: `1,3,5,7,9,11,13,15`  
Second print run: `2,4,6,8,10,12,14,16`

```txt
┌───────────────┐   ┌───────────────┐
│               │   │...............│
│   / \__       │   │.......__/.\...│
│  (    @\___   │   │...___/@....)..│
│   /         O │   │.O.........\...│
│  /   (_____/  │   │..\_____)...\..│
│  /_____/   U  │   │..U...\_____\..│
│               │   │...............│
│               │   │...............│
└───────────────┘   └───────────────┘

 1st print      flip       2nd print
 front         staple           back
```
