<template>
  <div class="container">
    <h1>Classes</h1>
    <p>
      The first two days (Sept. 26-27) will be devoted to classes. There will be
      two tracks, beginners and advanced.
    </p>
    <div class="indent bg-light">
      <h2>You will need</h2>
      <p>
        We want to make the classes as productive and interactive as possible.
        <br />
        For this, we will be using a jupyter hub instance managed by
        Depart-de-Sentier where brightway and jupyter are already up and
        running. This means that <strong>you will be able to start using Brightway
        immediately during the classes</strong>.
        <br />
        <strong>All you need is your own computer and a web-browser</strong>.
        For the Activity Browser related parts of the classes, we will be there
        ready to help you install it in your laptop, but if you can come with a
        working installation of it, it will save us all some time. Take a look
        at the documentation of the
        <a
          href="https://github.com/LCA-ActivityBrowser/activity-browser#installation"
        >
          Activity Browser</a
        >
        for installation instructions.
      </p>
    </div>
    <br />
    <div class="row">
      <div class="col card">
        <header>
          <h2 class="header">Beginners track</h2>
        </header>
        <p>Requirements. python basics, numpy basics, basics of LCA.</p>
        <ul>
          <li>Using and managing Brightway projects</li>
          <li>The Activity Browser: LCI best practices</li>
          <li>The Activity Browser: Interpretation</li>
          <li>Basic scripting: Inventory and calculations</li>
          <li>Understanding the supply chain graph</li>
          <li>Stochastic calculations</li>
          <li>Debugging common problems</li>
        </ul>
      </div>
      <div class="col card">
        <header>
          <h2 class="header">Advanced track</h2>
        </header>
        <ul>
          <li>Use data vectors and arrays</li>
          <li>Using and manipulating spatial data</li>
          <li>Calculations on the cloud</li>
          <li>Reproducible LCA science</li>
          <li>Integrating external models</li>
          <li>Global sensitivity analysis workflows</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style>
.indent {
  padding: 20px;
}
</style>
