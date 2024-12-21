fetchCourses: (params) =>
    instance.get(`/courses`, {
      params,
})