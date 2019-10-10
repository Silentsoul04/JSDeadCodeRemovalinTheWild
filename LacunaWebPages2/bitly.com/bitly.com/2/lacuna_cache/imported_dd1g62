
if(jQuery('#page-careers-positions').length > 0 ) {
  var JOB_TEMPLATE = '<div class="cell tabs-panel-x page-careers-position-item is-active  flex-container" id="{dept}"><div class="card"><div class="card-section"><h5 class="page-careers-position-title">{title}</h5><h4 class="page-careers-position-location">{locations}</h4><a href="{url}" target="_blank" rel="noopener" class="page-careers-position-toolbar-button button button-secondary button-large">Apply Here</a></div></div></div>';

  jQuery.ajax('https://api.lever.co/v0/postings/bitly', {
    context: document.getElementById('page-careers-positions'),
    success: function (data, status) {
      buildJobs(this, data);
    },
    error: displayJobLoadingError
  });

  function displayJobLoadingError(err) {
    var $this = jQuery(this);
    $this.append('<h3 class="tall centered">Sorry, we’re having difficulty showing you our open jobs. Please refresh the page to try again.</h3>');
  }

  function buildJobs(elem, jobs) {
    var $this = jQuery(elem);
    if (!jobs || !jobs.length) {
      // No open jobs
      return;
    }
    // Generate unique, alpha sorted list of departments with open jobs
    var departments = Object.keys(jobs.reduce(function (acc, cur) {
      acc[cur.categories.department] = true;
      return acc;
    }, {})).sort();

    buildDepartmentFilters($this.find('.navigation'), departments);
    buildJobListings($this.find('.container-pod .tabs-content-x').first(), jobs);


    jQuery('.tabs.navigation a').on('click',function(){
      cat = jQuery(this).attr('aria-controls');
      jQuery('.tabs-content-x .tabs-panel-x').removeClass('is-active');
      jQuery('.tabs-content-x .tabs-panel-x[data-id="'+cat+'"]').addClass('is-active');
      if (cat =='all') {
        jQuery('.tabs-content-x .tabs-panel-x').addClass('is-active');
      }
    });

  }

  function buildDepartmentFilters($navElem, departments) {
    var $filterPills = $navElem.find('.tabs-title');
    departments.forEach(function (dept) {
      console.log(dept);
      if(dept != 'undefined') {
        var $pill = $filterPills.first().clone();
        $pill.removeClass('is-active');
        $pill.find('a').first().attr('aria-controls', '' + dept.split(" ")[0].split("/")[0]);
        $pill.find('a').first().attr('href', '#' + dept.split(" ")[0].split("/")[0]);
        $pill.find('a').first().attr('id', '#' + dept.split(" ")[0].split("/")[0]);
        //$pill.find('a').first().addClass('bitly-pill');
        $pill.removeAttr('aria-selected');
        $pill.find('span').first().text(dept);
        $pill.appendTo($navElem);
      }
    });
  }

  function buildJobListings($elem, jobs) {
    if (!jobs || !jobs.length) {
      $elem.append('<h3 class="tall centered">There aren’t any open jobs at this time. Check again soon!</h3>');
    }

    jobs.forEach(function (job) {
      //console.log(job);
      var $jobListing = jQuery(JOB_TEMPLATE);

      if( job.categories.department != undefined) {
        $jobListing.attr('data-id', job.categories.department.split(" ")[0].split("/")[0]);
        $jobListing.find('.page-careers-position-title').text(job.text).addClass('header-m');
        $jobListing.find('.page-careers-position-location').text(job.categories.location);
        $jobListing.find('.page-careers-position-toolbar-button').attr('href', job.hostedUrl);
        $elem.append($jobListing);
      }
    })
  }

  jQuery(window).load(function() {
    jQuery('#page-careers-positions ul.navigation.tabs > li:first-child').addClass('is-active');
  });

} //end on careers


