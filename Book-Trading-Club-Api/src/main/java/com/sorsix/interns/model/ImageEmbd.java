package com.sorsix.interns.model;

import javax.persistence.Basic;
import javax.persistence.Embeddable;
import javax.persistence.FetchType;
import javax.persistence.Lob;
import java.sql.SQLException;

/**
 * Created by Kristina on 18.05.2018.
 */
@Embeddable
public class ImageEmbd {

    public ImageEmbd(byte data[], String fileName, String contentType, int size) throws SQLException {
        this.data = data;
        this.fileName = fileName;
        this.contentType = contentType;
        this.size = size;
    }

    public ImageEmbd() {
    }

    @Basic(fetch = FetchType.LAZY)
    @Lob
    public byte[] data;

    public String fileName;

    public String contentType;

    public int size;



}