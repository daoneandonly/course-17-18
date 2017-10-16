# ![Assessment 3][banner]

## Table of Contents

*   [Synopsis](#synopsis)
*   [Description](#description)
*   [Goals](#goals)
*   [Multiple](#multiple)
*   [Interactive](#interactive)
*   [Data](#data)
*   [Rubric](#rubric)

## Synopsis

*   **Weight**: 40%
*   **Type**: Oral
*   **Grade**: [Rubric][]
*   **Due**: 19-10 09:20-14:30 (ID 1), 20-10 11:10-17:50 (ID 2),
    18-10 08:30-11:00 or 20-10 08:30-11:00 (ID 3)

## Description

In **assessment 3** you’ll make [multiple][] [interactive][] visualisations
based on dirty [data][].

We’ll check how you apply d3, whether you understand what’s happening, how well
data is represented, and quality of your code and documentation.

It’s important that you show how you clean data, use data joins (enter,
update, exit), and represent data in multiple visualisations.  Understanding is
measured through an oral exam.

For this assessment you’ll build a project in a fork of
[`cmda-fe3/fe3-assessment-3`][starter-code] (**not our course repo**) and
host the project through [GitHub Pages][pages].  First, fork the repo.  Then,
work on your project and upload the final results to your fork either using
Git or the GitHub interface as covered in [class 1][c1].  You do not need
to create branches for this assessment.  You should upload files to the root
directory.

We will download your code when it’s due and check your assessment on GitHub.
You do not need to create a pull request.  You’ll present your knowledge in an
oral exam by answering questions in such a way as to demonstrate sufficient
knowledge of our course’s goals.

## Goals

**Assessment 3** tests that you’ve attained the following knowledge:

*   [Previous goals][s]
*   [Create multiple visualisations on the same page][s12] (**subgoal 12**)

## Multiple

Multiple means data can be explored through more than one visualisation.
The visualisations must interact.  For example, this includes interacting with
one element in one visualisation causing another one to appear or update, but
excludes two visualisations showing different data and not affecting each other.

## Interactive

Interactive means non-trivial interactivity: data changes and uses enter,
update, and exit.  For example, this includes sorting and filtering and excludes
zooming and tooltips.

## Data

You _may_ use [recommended data][recommended-data].
You _may_ use other data, provided you ask a lecturer and they give an **ok**.
You _must_ provide a link on how to download the data.
You _must_ clean data with code and provide that code with your assessment.

You _may not_ use data given in previous assignments or assessments.
You _may not_ use data provided in d3 examples.
You _may not_ use random data.

## Rubric

> 💁 We don’t like plagiarism and report it to our assessment committee
> (examencommissie in Dutch).  See ¶ 6.1.2 of Teaching and Examination
> Regulations (TER) for a full definition, but here are a few cases that
> count as plagiarism:
>
> > a. using or copying someone else’s texts, data or ideas without a full and
> > correct acknowledgement of sources;
> > b. presenting the structure or central ideas developed by someone else as
> > your own work or ideas, even when a reference to other authors has been
> > included;
> >
> > \[…]
> >
> > e. copying (parts of) media files or other sources, software source codes,
> > models and other diagrams of other people without acknowledgement and
> > allowing it to be held as your own work;
> >
> > \[…]
> >
> > g. copying the work of fellow-students and allowing it to be held as your
> > own work;
> >
> > \[…]

<!--lint disable no-html maximum-line-length-->

<table>
  <thead>
    <tr>
      <th></th>
      <th><strong>1-2</strong></th>
      <th><strong>3-4</strong></th>
      <th><strong>5-6</strong></th>
      <th><strong>7-8</strong></th>
      <th><strong>9-10</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th align="center" scope="row">Representation</th>
      <td align="center">There is no data, <strong>less that two visualisations</strong>, or data is barely used in the <strong>visualisations</strong> (if at all)</td>
      <td align="center">Data and <strong>more than one visualisations</strong> exist but interpreting the <strong>visualisations</strong> is harder than interpreting the data itself</td>
      <td align="center">Dirty data is displayed in <strong>multiple interacting visualisations that are not basic examples</strong></td>
      <td align="center">The <strong>visualisations go beyond examples</strong>; Interaction contributes to gaining insight in data; There are demonstrable additions and the student can name them</td>
      <td align="center">🎓<br>Several of the data’s dimensions are beautifully visualised through interaction</td>
    </tr>
    <tr>
      <th align="center" scope="row">Application of subject matter</th>
      <td align="center">d3 version 4 is either not referenced or not used</td>
      <td align="center">d3 version 4 is either used to load data, clean data, or to make <strong>less than two dynamic visualisations</strong>; there is no signification interaction using data joins</td>
      <td align="center">d3 version 4 is used to load data <em>and</em> clean data <em>and</em> to make <strong>multiple interactive visualisations</strong> with data joins</td>
      <td align="center">The <strong>visualisations contain well-chosen features and interaction methods</strong></td>
      <td align="center">😱<br>The way the student applies d3 is more advanced than what they were taught in class; let’s switch places</td>
    </tr>
    <tr>
      <th align="center" scope="row">Understanding</th>
      <td align="center">There is either no substantial code or the student cannot explain the code that exists</td>
      <td align="center">The student cannot explain parts of the code</td>
      <td align="center">The student can explain every part of the code, <strong>describe why it’s used instead of alternatives</strong></td>
      <td align="center">The student can explain every part of the code, describe why it’s used instead of alternatives, <strong>an can make live changes</strong></td>
      <td align="center">🤓<br>The student understands JavaScript and d3’s programming principles and a geeky / nerdy conversation can be held about these principles</td>
    </tr>
    <tr>
      <th align="center" scope="row">Quality</th>
      <td align="center">The project is handed in late, broken, undocumented, <strong>not on GitHub Pages</strong>, or otherwise not proper</td>
      <td align="center">Code style is inconsistent or code is partially documented</td>
      <td align="center">Code adheres to standards and docs cover what the project is and does and the student’s process</td>
      <td align="center">Code quality is consistently good and docs are professional</td>
      <td align="center">📚<br>Code and docs both read like great books</td>
    </tr>
  </tbody>
</table>

<!--lint enable no-html maximum-line-length-->

[banner]: https://cdn.rawgit.com/cmda-fe3/logo/a4b0614/banner-assessment-3.svg

[multiple]: #multiple

[interactive]: #interactive

[data]: #data

[rubric]: #rubric

[pages]: https://pages.github.com

[c1]: ../class-1.md

[s]: ../readme.md#goals

[s12]: ../readme.md#subgoal-12

[recommended-data]: ../assessment-1/readme.md#other-data

[starter-code]: https://github.com/cmda-fe3/fe3-assessment-3
