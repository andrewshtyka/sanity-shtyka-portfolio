# Sanity CMS for portfolio website

## Contents

[1. Basic info](#1-basic-info)

- [Install and use](#install-and-use)
- [Website structure](#website-structure)
- [i18n](#i18n)
- [Icons for Sanity](#icons-for-sanity)

<br/>

[2. Editable content](#2-editable-content)

- [2.0 Global UI content](#20-global-ui-content)

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
  - [Meta](#meta)
  - [About](#about-1)
  - [Details](#details)

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

### 2.0 Global UI content

##### Navigation

- [x] Menu items `(+ mobile)`
- [x] Footer text

##### Contact

- [x] Contact title
- [x] Contact video `(video + poster)`
- [x] Contact paragraph `(text + links)`

##### Project page:

- [x] Title `(Challenges & Solutions)`
- [x] Subtitle `(Challenge)`
- [x] Nav title `(Challenges)`
- [x] End text `(The end)`

<br/>

---

### 2.1 Home page

Note: I use [x] to mark accomplished tasks. Just a convenience.

#### Hero:

- [x] Title
- [x] Subtitle
- [x] Tags `(text + link)`
- [x] Link `(text + file)`
- [x] Video `(video + poster)`

#### About:

- [x] Paragraph `(text + links + image)`
- [x] Sign `(svg)`
- [x] Details

#### Experience:

- [x] Title
- [x] All nodes in table (text)

#### Achievements:

- [x] Title
- [x] All nodes in table (text)<br/>
      _Exception: Numbers_

#### Clients:

- [x] Title (normal, italic) and clients (bullet list)

#### Download resume:

- [x] Title and details
- [x] File

#### Projects:

- [x] Title<br/>
      _Other data must be retrieved from the `projects`_

#### Experiments:

- [x] Title and subtitle<br/>
      _Other data must be retrieved from the `experiments`_

<br/>

---

### 2.2 Project page

#### Meta:

- [x] Project title
- [x] Slug
- [x] Created at (date)

#### About:

- [x] Description
- [x] Link

#### Details:

- [x] `(multiple)` List `(title + bullets)`
- [x] Video `(video + poster)`

##### `(multiple)` Content block:

- [x] Navigation text (basically, short challenge description)
- [x] `(multiple)` Challenge text
- [x] `(multiple)` Solution text
- [x] `(multiple)` Media:
  - [x] Image `(image + alt text)`
  - [x] Video `(video + poster)`

<br/>

---

### 2.3 Error page

#### 404 not found:

- [x] Title
- [x] Description
- [x] Link `(text + link)`

#### Other errors:

- [x] Title
- [x] Description
- [x] Link `(text + link)`
