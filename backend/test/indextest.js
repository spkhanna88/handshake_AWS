process.env.NODE_ENV = "test";

const app = require("../index");
const chai = require("chai");
const chaiHttp = require("chai-http");
let should = chai.should();
// Configure chai
chai.use(chaiHttp);
// chai.should();

//Test Case 1::::

// describe("Studentjobs", function() {
//   describe("get/studentviewalljobs", function() {
//     // Test to get all jobs
//     it("should get all students record in array", done => {
//       chai
//         .request(app)
//         .get("/studentviewalljobs")
//         .end((err, res) => {
//           res.should.have.status(200);
//           res.body.should.be.a("array");
//           done();
//         });
//     });
//   });
// });

//Test Case 2 ::::

// describe("Studentjobs", function() {
//   describe("post/getStudentBasicDetail", function() {
//     // Test to get all jobs
//     it("should get student profile based on email", done => {
//       let studentemail = { email: "mars@w.ww" };

//       chai
//         .request(app)
//         .post("/getStudentBasicDetail")
//         .send(studentemail)
//         .end((err, res) => {
//           res.should.have.status(200);
//           res.body.should.be.a("object");
//           done();
//         });
//     });
//   });
// });

//Test Case 3::::

// describe("Studentjobs", function() {
//   describe("post/getStudentEduDetail", function() {
//     // Test to get all jobs
//     it("should get student profile based on email", done => {
//       let studentemail = { email: "mars@w.ww" };

//       chai
//         .request(app)
//         .post("/getStudentEduDetail")
//         .send(studentemail)
//         .end((err, res) => {
//           res.should.have.status(200);
//           //res.body.should.be.a("object");
//           res.body.should.have.property("complocation");
//           done();
//         });
//     });
//   });
// });

//Test Case 4::::

// describe("Studentjobs", function() {
//   describe("post/studentviewregevent", function() {
//     // Test to get all jobs
//     it("should get student profile based on email", done => {
//       let studentemail = { email: "mars@w.ww" };

//       chai
//         .request(app)
//         .post("/studentviewregevent")
//         .send(studentemail)
//         .end((err, res) => {
//           res.should.have.status(200);
//           res.body.should.be.a("object");
//           res.body.should.have.property("complocation");
//           done();
//         });
//     });
//   });
// });

//Test Case 5:

describe("Studentjobs", function() {
  describe("post/eventstudentviewer", function() {
    // Test to get all jobs
    it("should get student profile based on email", done => {
      let eventid = { eventid: "EVENT11" };

      chai
        .request(app)
        .post("/eventstudentviewer")
        .send(eventid)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");

          done();
        });
    });
  });
});
