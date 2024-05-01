// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract StudentEnrollment {
    struct Enrollment {
        string studentName;
        uint256 enrolledDate;
        string courseTitle;
        string studentEmail;
        string certificateProvider;
        string certificateId;
    }

    mapping(uint256 => Enrollment) public enrollments;
    mapping(string => uint256) public enrollmentIdsByCertificateId; // Mapping from certificateId to enrollmentId
    uint256 public enrollmentCounter;

    event EnrollmentAdded(uint256 indexed id, string studentName, string courseTitle);


    function enrollStudent(
        string memory _studentName,
        string memory _courseTitle,
        string memory _studentEmail,
        string memory _certificateProvider,
        string memory _certificateId
    ) public {
        uint256 id = enrollmentCounter;
        enrollments[id] = Enrollment({
            studentName: _studentName,
            enrolledDate: block.timestamp, // Use block timestamp as enrolledDate
            courseTitle: _courseTitle,
            studentEmail: _studentEmail,
            certificateProvider: _certificateProvider,
            certificateId:_certificateId
        });
        enrollmentIdsByCertificateId[_certificateId] = id; // Update mapping
        enrollmentCounter++;

        emit EnrollmentAdded(id, _studentName, _courseTitle);
    }

    // Function to retrieve enrollment details by certificateId
    function getEnrollmentByCertificateId(string memory _certificateId) public view returns (
        string memory studentName,
        uint256 enrolledDate,
        string memory courseTitle,
        string memory studentEmail,
        string memory certificateProvider,
        string memory certificateId
    ) {
        uint256 id = enrollmentIdsByCertificateId[_certificateId];
        Enrollment storage enrollment = enrollments[id];
        return (
            enrollment.studentName,
            enrollment.enrolledDate,
            enrollment.courseTitle,
            enrollment.studentEmail,
            enrollment.certificateProvider,
            enrollment.certificateId
        );
    }
}
