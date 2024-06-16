import React from "react";

function ArticleInfo() {
  return (
    <div class="row">
      <div class="col text-start">
        <div class="d-inline-flex">
          <div class="p-1">
            <i class="bi bi-person" style={{ color: "blue" }}></i>
          </div>
          <div class="p-1">John Doe</div>
        </div>
      </div>
      <div class="col text-end">
        <div class="d-inline-flex">
          <div class="p-1">
            <i class="bi bi-calendar4" style={{ color: "blue" }}></i>
          </div>
          <div class="p-1">Feb 23, 2024</div>
        </div>
      </div>
    </div>
  );
}

export default ArticleInfo;
