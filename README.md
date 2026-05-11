# (WIP) Sanity CMS for portfolio website

## Contents

[1. Basic info](#1-basic-info)

- [Install and use](#install-and-use)
- [Website structure](#website-structure)
- [i18n](#i18n)
- [Icons for Sanity](#icons-for-sanity)

<br/>

[2. Editable content](#2-editable-content)

- [2.0 Repetitive UI content](#20-repetitive-ui-content)

- [2.1 Home page](#21-home-page)
  - [Hero](#hero)
  - [About](#about)
  - [Experience](#experience)
  - [Achievements](#achievements)
  - [Clients](#clients)
  - [Download resume](#download-resume)
  - [Projects](#projects)
  - [Experiments](#experiments)

- [2.2 Project page](#22-project-page)
  - [Navigation](#navigation)
  - [Intro](#intro)
  - [Content](#content)

- [2.3 Error page](#23-error-page)
  - [404 not found](#404-not-found)
  - [Other errors](#other-errors)

<br/>

## 1. Basic info

### Install and use

Install:

```bash
npm i
```

<br/>

Create `.env` and put keys from your Sanity Project there:

```js
SANITY_STUDIO_PROJECT_ID = 'your_id'
SANITY_STUDIO_DATASET = 'your_dataset'
```

<br/>

Finally, run the local server:

```bash
npm run dev
```

<br/>

### Website structure

`**` Means that page is required only for structuring data in CMS. It doesn't exist (yet) on a website as a separate page, visible to users.

- `Home page`
- `** Projects`
  - `[ Project page ]`
- `** Experiments`
- `Error page`

<br/>

### i18n

- `en`
- `ua`

Use plugin:

```bash
npm install --save @sanity/document-internationalization
```

[Guide to plugin on Github](https://github.com/sanity-io/plugins/tree/main/plugins/%40sanity/document-internationalization#install)

<br/>

### Icons for Sanity

[Check all available icons](https://icons.sanity.build/all?scheme=dark&value=eJyrrgUAAXUA+Q%3D%3D)

Usage:

```js
import {DocumentIcon} from '@sanity/icons'

{
  icon: DocumentIcon,
  //...
}
```

</br>

## 2. Editable content

### 2.0 Repetitive UI content

##### Navigation

- Menu items `(+ mobile)`
- Footer text

##### Contact

- Contact title
- Contact video `(video + poster)`
- Contact paragraph `(text + links)`

<br/>

---

### 2.1 Home page

#### Hero:

- Title
- Subtitle
- Tags `(text + link)`
- Link `(text + file)`

#### About:

- Paragraph `(text + links)`
- Sign `(svg)`
- Details

#### Experience:

- Title
- All nodes in table (text)

#### Achievements:

- Title
- All nodes in table (text)<br/>
  _Exception: Numbers_

#### Clients:

- Title
- Clients

#### Download resume:

- Title
- Details
- File

#### Projects:

- Title
- Link `(text + link)`<br/>
  _Other data must be retrieved from the `projects`_

#### Experiments:

- Title
- Subtitle<br/>
  _Other data must be retrieved from the `experiments`_

<br/>

---

### 2.2 Project page

#### Navigation:

- Title
- Text

#### Intro:

- Title
- Description
- Link `(text + link)`
- `(multiple)` List `(title + bullets)`
- Video `(video + poster)`

#### Content:

- Title
- Subtitle `(Challenge)`
- End text `(The end)`

##### `(multiple)` Content block:

- Challenge text
- `(multiple)` Solution text
- `(multiple)` Media:
  - Image `(image + alt text)`
  - Video `(video + poster)`

<br/>

---

### 2.3 Error page

#### 404 not found:

- Title
- Subtitle
- Link `(text + link)`

#### Other errors:

- Title
- Subtitle
- Link `(text + link)`
