const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () =>
  layout(html`
    <h3>Add a Page</h3>
    <hr />
    <form method="POST" action="/wiki/">
      <div>
        <label for="title" class="col-sm-2 control-label">Author Name</label>
        <div class="col-sm-10">
          <input id="title" name="author" type="text" class="form-control" />
        </div>
        <!-- PLACEHOLDER FOR AUTHOR NAME FIELD -->
      </div>

      <div>
        <!-- PLACEHOLDER FOR AUTHOR EMAIL FIELD -->
        <label for="title" class="col-sm-2 control-label">Email</label>
        <div class="col-sm-10">
          <input id="title" name="email" type="text" class="form-control" />
        </div>
      </div>

      <div class="form-group">
        <label for="title" class="col-sm-2 control-label">Page Title</label>
        <div class="col-sm-10">
          <input id="title" name="title" type="text" class="form-control" />
        </div>
      </div>

      <div>
        <!-- PLACEHOLDER FOR PAGE CONTENT TEXTAREA FIELD -->
        <label for="title" class="col-sm-2 control-label">Content</label>
        <div class="col-sm-10">
          <input id="title" name="content" type="text" class="form-control" />
        </div>
      </div>

      <div>
        <!-- PLACEHOLDER FOR PAGE STATUS INPUT FIELD -->
        <label for="title" class="col-sm-2 control-label">Status</label>
        <div class="col-sm-10">
          <input id="title" name="status" type="text" class="form-control" />
        </div>
      </div>

      <div class="col-sm-offset-2 col-sm-10">
        <button type="submit" class="btn btn-primary">submit</button>
      </div>
    </form>
  `);
//added
