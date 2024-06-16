import React from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Article1 from "../../resources/Article1.svg";
import Article2 from "../../resources/Article2.svg";
import Article3 from "../../resources/Article3.svg";
import ArticleInfo from "./Util/ArticleInfo";

function Article() {
  return (
    <div class=" mx-auto">
      <div class="mb-5">
        <br></br>
        <h3 class="text-muted mt-5">Blog</h3>
        <h2 class="text-dark mb-5">Browse Articles</h2>
      </div>

      <div class="container">
        <div class="row mx-auto pb-5">
          <div class="col">
            <Card border="white">
              <Card.Img variant="top" src={Article1} />
              <ArticleInfo />

              <Card.Body>
                <Card.Title className="text-start pb-2">
                  <h3> Lorem ipsum dolor sit amet consectetur.</h3>
                </Card.Title>

                <a
                  style={{
                    color: "blue",
                    fontSize: "1.2rem",
                    textDecoration: "none",
                  }}
                >
                  View details <i class="bi bi-chevron-right "></i>
                </a>
              </Card.Body>
            </Card>
          </div>
          <div class="col">
            <Card border="white">
              <Card.Img variant="top" src={Article2} />
              <ArticleInfo />
              <Card.Body>
                <Card.Title className="text-start pb-2">
                  <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                </Card.Title>
                <a
                  style={{
                    color: "blue",
                    fontSize: "1.2rem",
                    textDecoration: "none",
                  }}
                >
                  View details <i class="bi bi-chevron-right "></i>
                </a>{" "}
              </Card.Body>
            </Card>
          </div>
          <div class="col">
            <Card border="white">
              <Card.Img variant="top" src={Article3} />
              <ArticleInfo />
              <Card.Body>
                <Card.Title className="text-start pb-2">
                  <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                </Card.Title>
                <a
                  style={{
                    color: "blue",
                    fontSize: "1.2rem",
                    textDecoration: "none",
                  }}
                >
                  View details <i class="bi bi-chevron-right "></i>
                </a>{" "}
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Article;
