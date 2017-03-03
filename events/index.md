---
title: Events
imageurl: images/header-default.png
layout: subpage
published: true
pagination: 
  enabled: true
  collection: events
---
<div class="listing2">
  {% for event in paginator.posts %}
    <article class="listing2__item">
      <div class="row">
        {% if event.imageurl %}
          <div class="listing2__image col-sm-4">
            <a href="{{ event.url }}">
              <img src="{{ event.imageurl | prepend: site.baseurl }}" class="img-responsive" />
            </a>
          </div>
        {% endif %}
        {% if event.imageurl %}
          <div class="listing2__text col-sm-8">
        {% else %}
          <div class="listing2__text col-sm-12">
        {% endif %}
            <h2 class="listing2__item-title">
              <a href="{{ event.url }}">{{ event.title }}</a>
            </h2>
            <div class="listing2__item-meta">
                {{ event.date | date_to_string }}{% if event.end-date %} - {{ event.end-date | date_to_string }}{% endif %}
            </div>
          </div>
      </div>
    </article>
  {% endfor %}
</div>

{% if paginator.total_pages > 1 %}
<div class="pagination__wrapper text-center">
    <ul class="pagination">
      {% if paginator.previous_page %}
      <li class="previous">
          <a href="{{ paginator.previous_page_path | prepend: site.baseurl | replace: '//', '/' }}">&laquo;</a>
      </li>
      {% endif %}
    
      {% if paginator.page_trail %}
        {% for trail in paginator.page_trail %}
          <li {% if page.url == trail.path %}class="active"{% endif %}>
              <a href="{{ trail.path | prepend: site.baseurl | replace: '//', '/' }}" title="{{trail.title}}">{{ trail.num }}</a>
          </li>
        {% endfor %}
      {% endif %}
    
      {% if paginator.next_page %}
      <li class="next">
          <a href="{{ paginator.next_page_path | prepend: site.baseurl | replace: '//', '/' }}">&raquo;</a>
      </li>
      {% endif %}
    </ul>
</div>
{% endif %}