module.exports = [
  {
    event_name: 'status:new:endorsed',
    event: {
      data: {
        meta: {
          awerb: 'Yes',
          ready: 'No'
        },
        model: 'project',
        action: 'grant'
      },
      event: 'status:new:endorsed',
      status: 'endorsed'
    },
    created_at: '2020-01-23T10:44:36.440124+00:00'
  },
  {
    event_name: 'status:endorsed:with-inspectorate',
    event: {
      data: {
        meta: {
          awerb: 'Yes',
          ready: 'No',
          authority: 'Yes'
        },
        model: 'project',
        action: 'grant'
      },
      event: 'status:endorsed:with-inspectorate',
      status: 'with-inspectorate'
    },
    created_at: '2020-01-23T10:44:37.173304+00:00'
  }
];
