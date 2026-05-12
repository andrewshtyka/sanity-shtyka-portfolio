# Sanity CMS for portfolio website

## Contents

[1. Installation, usage and basic info](#1-installation-usage-and-basic-info)

- [Install](#install)
- [Website structure](#website-structure)
- [i18n](#i18n)
- [Icons for Sanity](#icons-for-sanity)
- [Config updates](#config-updates)

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

- [2.4 Experiments page](#24-experiments-page)
  - [Experiments](#experiments-1)

<br/>

## 1. Installation, usage and basic info

### Install

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

<br/>

### Config updates

When you create new type, add it to:

1. array `schemaTypes` in `/schemaTypes/index.ts` (as a reference to object)
2. array `allTypesStringNames` in `/schemaTypes/index.ts` (as a string with type of your schema)
3. object in `structureTool` at `sanity.config.ts` (place where it makes sense)

</br>

## 2. Editable content

### 2.0 Global UI content

##### Navigation

- Menu items `(+ mobile)`
- Footer text

##### Contact

- Contact title
- Contact video `(video + poster)`
- Contact paragraph `(text + links)`

##### Project page:

- Title `(Challenges & Solutions)`
- Subtitle `(Challenge)`
- Nav title `(Challenges)`
- End text `(The end)`

<br/>

---

### 2.1 Home page

#### Hero:

- Title
- Subtitle
- Tags `(text + link)`
- Link `(text + file)`
- Video `(video + poster)`

#### About:

- Paragraph `(text + links + image)`
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

- Title (normal, italic) and clients (bullet list)

#### Download resume:

- Title and details
- File

#### Projects:

- Title<br/>
  _Other data must be retrieved from the `projects`_

#### Experiments:

- Title and subtitle<br/>
  _Other data must be retrieved from the `experiments`_

<br/>

---

### 2.2 Project page

#### Meta:

- Project title
- Slug
- Created at (date)

#### About:

- Description
- Link

#### Details:

- `(multiple)` List `(title + bullets)`
- Video `(video + poster)`

##### `(multiple)` Content block:

- Navigation text (basically, short challenge description)
- `(multiple)` Challenge text
- `(multiple)` Solution text
- `(multiple)` Media:
  - Image `(image + alt text)`
  - Video `(video + poster)`

<br/>

---

### 2.3 Error page

#### 404 not found:

- Title
- Description
- Link `(text + link)`

#### Other errors:

- Title
- Description
- Link `(text + link)`

<br/>

---

### 2.4 Experiments page

#### Experiments:

- Title
- Description
- Link `(text + link)`
- Media (`image + alt` or `video + poster`)
