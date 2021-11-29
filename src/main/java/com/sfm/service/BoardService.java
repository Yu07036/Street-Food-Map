package com.sfm.service;

import com.sfm.model.BoardVO;

import java.util.List;

public interface BoardService {
    public List<BoardVO> listView();
    public int insertBoard(BoardVO vo);
    public BoardVO contentView(BoardVO vo);
}
